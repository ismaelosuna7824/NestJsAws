import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("OpenApi")
    .setDescription("The cast Api description")
    .setVersion("1.0")
    .addTag("cats")
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);
  const port = process.env.PORT || 8080;
  await app.listen(port);
}
bootstrap();
