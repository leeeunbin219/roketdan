import css from "styled-jsx/css";
import Image from "next/image";
import naong from "../public/images/naong.png";
import roi from "../public/images/roi.png";
import rosa from "../public/images/rosa.png";
import bgimg from "../public/images/bgimg.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Image src={bgimg} width={900} className="bgimg" />
      <div className="img1">
        <Link href={`http://variablemaker.kr/`} passHref>
          <Image src={roi} height={600} width={300} />
        </Link>
      </div>
      <div className="img2">
        <Link href={`https://www.neokkukae.store/`} passHref>
          <Image src={naong} height={200} width={200} />
        </Link>
      </div>
      <div className="img3">
        <Link href={`https://make.mycookie.site/`} passHref>
          <Image src={rosa} height={600} width={260} />
        </Link>
      </div>
      <style jsx>{home}</style>
    </div>
  );
}

const home = css`
  .container {
    width: 900px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .img1 {
    position: absolute;
    top: 60px;
    left: 100px;
  }
  .img2 {
    position: absolute;
    top: 450px;
    right: 380px;
  }
  .img3 {
    position: absolute;
    top: 60px;
    right: 100px;
  }
`;
