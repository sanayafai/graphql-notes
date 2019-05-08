package com.github.florianehmke.graphqlnotes.service;

import com.github.florianehmke.graphqlnotes.configuration.Role;
import io.leangen.graphql.annotations.GraphQLSubscription;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.reactivestreams.Publisher;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;

import javax.annotation.security.RolesAllowed;
import java.util.ArrayList;
import java.util.List;

@Controller
@GraphQLApi
@RolesAllowed(Role.USER)
public class NotificationService {

  private final List<FluxSink<Notification>> subscribers = new ArrayList<>();

  @GraphQLSubscription
  public Publisher<Notification> notifications() {
    return Flux.create(
        subscriber -> subscribers.add(subscriber.onDispose(() -> subscribers.remove(subscriber))),
        FluxSink.OverflowStrategy.LATEST);
  }

  public void notify(String title, String content) {
    subscribers.forEach(
        notificationFluxSink -> notificationFluxSink.next(new Notification(title, content)));
  }
}