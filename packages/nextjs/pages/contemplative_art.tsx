import Link from "next/link";
import { MetaHeader } from "~~/components/MetaHeader";

function Contemplative() {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 md:w-1/2">
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Contemplative Digital Art</span>
          </h1>
          <p>
            In the realm of contemplative digital arts, I have found a dance of awareness weaving together themes of the
            body, impermanence, nature, observation, and emptiness. These works, like reflections in a mirror, enhance
            my understanding of the world directly in front of me.
          </p>
          <p>
            Bound together by algorithmic design and inherent transience, these creations reflect the Buddhist teaching
            of impermanence. Time here is an integral part of the creative process.
          </p>
          <p>
            While not all works utilize AI, they are all anchored in the digital realm. My creative practice navigates
            through generative design, creative coding, generative AI, and interactive web design. Adapting to the
            subject matter at hand, these tools sometimes serve as didactic instruments, other times adopting an
            unabashedly queer aesthetic.
          </p>
          <p>
            And now, these creations are my gift and offering to you. Like a handful of leaves offered in the forest,
            they are intended to inspire, provoke, and awaken. May they serve as a catalyst for your own journey of
            discovery. May they invite you into a dance with the ephemeral and the eternal, the tangible and the
            abstract, the personal and the universal. May they echo in your mind, resonate in your heart, and find a
            home in your consciousness. This is my offering to you, a token of generosity and a manifestation of
            interconnectedness in this vast digital realm:
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:w-1/2 mb-2">
          <div className="btn btn-primary px-4 mb-2">
            <Link href="/sketch">Body of the Breath</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://marlonbarrios.github.io/black_ink_enso/">Dymanic Enso</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://marlonbarrios.github.io/chromatic_crescent/">Chromatic Crescent</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://marlonbarrios.github.io/spirograh100squares/">Emergent Mandalas</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://medium.com/@marlon_21867/canonical-soft-space-01-a751d337da2a">Canonical</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://medium.com/@marlon_21867/thick-present-awareness-guided-meditation-a-post-humanist-practice-b0ed88521f01">
              Thick Present Awareness
            </Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://marlonbarrios.github.io/flow_field_02/">Emergent Paths</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contemplative;
