/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import PageTitle from "../components/PageTitle"

export const metadata: Metadata = {
  title: "FangShi | About me",
  description: "",
}

export default function About() {
  return (
    <>
      <PageTitle title="About me" />

      <section>
        <div className="content max-md:!pt-0">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4 max-md:flex max-md:justify-center max-md:-mx-5">
              <img src="/fangshi_about.jpg" alt="FangShi about" className="w-full" />
            </div>
            <div className="md:col-span-8">
              <h3 className="text-4xl font-bold">- Lifang's story:</h3>
              <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non velit pretium velit maximus eleifend in et risus. In eu enim placerat tellus finibus convallis. Mauris lacinia mi ante, fringilla imperdiet arcu porttitor vel. Pellentesque eget maximus mi. Nam sapien ex, interdum eu risus sed, fringilla sollicitudin nisi. Maecenas elit urna, congue non consectetur vel, porta vel metus. Praesent placerat risus non est malesuada tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sollicitudin ex tincidunt aliquam luctus. Proin vel odio aliquam, tincidunt turpis at, aliquam ligula. Curabitur molestie, magna vel vestibulum ullamcorper, risus ligula rhoncus lectus, in efficitur massa dolor sit amet odio. Nullam iaculis, tortor ac molestie cursus, nisi leo blandit felis, vitae volutpat neque enim quis nisi. Praesent lacus dolor, gravida sed maximus a, fermentum et sem.</p>
              <p className="mt-4">Quisque in pulvinar nulla. Proin non sem enim. Pellentesque id dui non dui tempus commodo quis in tellus. Fusce ut aliquam sem, vitae pellentesque enim. Vestibulum quis porttitor arcu. Nulla eu lacus et purus dignissim rhoncus quis sit amet tortor. Nullam elementum sagittis quam, vel luctus quam hendrerit a.</p>
              <p className="mt-4">Mauris fringilla augue eu libero varius, vitae posuere nisi pharetra. Phasellus ultrices nisl vitae nisl vestibulum, at placerat libero ullamcorper. Donec luctus vitae nibh ac mattis. Nulla justo mi, consequat vel rhoncus sit amet, semper eu libero. Donec vel condimentum risus, vel posuere nulla. Duis in accumsan libero, eu tempus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue condimentum tellus, quis imperdiet nunc viverra fringilla. Fusce auctor vestibulum quam, a commodo tellus facilisis eu. Fusce aliquam malesuada orci at elementum. Nulla velit risus, accumsan nec velit eget, laoreet sodales arcu. Donec blandit ipsum et sollicitudin sollicitudin. Praesent a urna molestie, laoreet sapien sed, fermentum sapien. Donec quis ipsum euismod, facilisis massa ac, ullamcorper neque.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
