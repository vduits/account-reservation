FROM openjdk:13-alpine
VOLUME /tmp
COPY target/account-reservation-0.0.1-SNAPSHOT.jar target/account-reservation.jar
EXPOSE 8048
ENTRYPOINT ["java","-Dspring.profiles.active=live","-jar","target/account-reservation.jar"]
