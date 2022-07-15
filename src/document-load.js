import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { registerInstrumentations } from '@opentelemetry/instrumentation';

import { ZipkinExporter } from "@opentelemetry/exporter-zipkin";

const url = new ZipkinExporter({
	url: 'http://localhost:9411/api/v2/spans', 
  serviceName: "Zachs project"
})

const provider = new WebTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.addSpanProcessor(new SimpleSpanProcessor(url))


export const Tracer = provider.getTracer('zachs-website');
console.log(url)

registerInstrumentations({
  instrumentations: [
    new DocumentLoadInstrumentation(),
  ],
});
