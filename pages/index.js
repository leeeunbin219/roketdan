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
      <Image src={bgimg} width={1200} className="bgimg" />
      <div className="img1">
        <Link href={`http://variablemaker.kr/`} passHref>
          <Image src={roi} height={800} width={400} />
        </Link>
      </div>
      <div className="img2">
        <Link href={`https://www.neokkukae.store/`} passHref>
          <Image src={naong} height={300} width={250} />
        </Link>
      </div>
      <div className="img3">
        <Link href={`https://make.mycookie.site/`} passHref>
          <Image src={rosa} height={800} width={350} />
        </Link>
      </div>
      <style jsx>{home}</style>
    </div>
  );
}

const home = css`
  .container {
    width: 1200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .img1 {
    position: absolute;
    top: 100px;
    left: 100px;
  }
  .img2 {
    position: absolute;
    top: 550px;
    right: 500px;
  }
  .img3 {
    position: absolute;
    top: 100px;
    right: 100px;
  }
`;
