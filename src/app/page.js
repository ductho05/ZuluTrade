import Following from "@/components/Following";
import Intro from "@/components/Intro";
import ModCenter from "@/components/ModCenter";
import OurAwards from "@/components/OurAwards";
import TopLeader from "@/components/TopLeader";
import { BODY_COLOR } from "@/utils/colors";

export default function Home() {
  return (
    <div className="">
      <Intro />
      <ModCenter />

      <div
        style={{
          backgroundColor: `${BODY_COLOR}`
        }}
        className="pt-[360px] md:pt-[230px] px-[10px] lg:px-[100px] pb-[50px]"
      >
        <TopLeader />
      </div>

      <div
        style={{
          backgroundColor: `${BODY_COLOR}`
        }}
        className="px-[10px] lg:px-[100px]"
      >
        <Following />
      </div>
      <div
        style={{
          backgroundColor: `#fff`
        }}
        className="px-[10px] lg:px-[100px]"
      >
        <OurAwards />
      </div>
    </div>
  )
}
