import Header from "../components/Header";
import Center from "../components/Center";
import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";
import ProductsGrid from "../components/ProductsGrid";
import Title from "../components/Title";
import Footer from "../components/Footer";
import HorizontalCarousel from "../components/HorizontalCarousel";

// export default function ProductsPage({ products }) {
//   return (
//     <>
//       <Header />

//       <Center>
//         <Title>All Products</Title>
//         <ProductsGrid products={products} />
//       </Center>
//     </>
//   );
// }

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>All Products</Title>
        <ProductsGrid products={products} showAll={true} />{" "}
        {/* Show all products */}
      </Center>
      <HorizontalCarousel />

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
