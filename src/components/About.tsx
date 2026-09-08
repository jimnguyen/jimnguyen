import Image from "next/image";
import pic1 from "@/assets/pic1.webp";
import pic2 from "@/assets/pic2.webp";
import pic3 from "@/assets/pic3.webp";
import pic4 from "@/assets/pic4.webp";
import pic5 from "@/assets/pic5.webp";
import benji from "@/assets/benji.webp";

const photos = [pic1, pic2, pic3, pic4, pic5, benji];

export function About() {
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
      <p className="text-lg text-text-muted">
        I&apos;m a software engineer based in San Francisco, originally from
        Bellevue, WA, building web apps end to end — from the database up
        through whatever framework is having a moment. Outside of the editor
        I&apos;m usually hiking,
        shooting hoops, planning the next trip, or getting outvoted by my cat
        Benji on what to watch. 😺
      </p>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-3">
        {photos.map((photo, i) => (
          <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={photo}
              alt=""
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(min-width: 768px) 15vw, 30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
