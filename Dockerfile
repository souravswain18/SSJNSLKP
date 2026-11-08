# Stage 1: Build Java Spring Boot Application
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY pom.xml mvnw ./
COPY .mvn .mvn
RUN chmod +x mvnw
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Stage 2: Production JRE runtime
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java", "-Dserver.port=${PORT}", "-jar", "app.jar"]
