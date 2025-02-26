import Featured from "../components/Featured";
import Header from "../components/Header";
import { Product } from "../models/Product";
import { mongooseConnect } from "../lib/mongoose";
import NewProducts from "../components/NewProducts";

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <>
      <div className="containervideo">
        <Header />

        <iframe
          src="/3dCarousel/carousel.html"
          width="100%"
          height="90%"
          style={{ border: "none" }}
        ></iframe>
        <video autoPlay loop muted playsInline className="background-clip">
          <source src="aventador.mp4" type="video/mp4" />
        </video>
        <div className="content"></div>
      </div>

      <div className="containervideo">
        <video autoPlay loop muted playsInline className="background-clip">
          <source src="redLamborgini.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <Featured product={featuredProduct} />
          <NewProducts products={newProducts} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = null;
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
