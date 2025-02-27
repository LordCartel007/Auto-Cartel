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
          src="https://3d-carousel-autocartel.vercel.app/"
          width="100%"
          height="90%"
          style={{ border: "none" }}
        ></iframe>
        <video autoPlay loop muted playsInline className="background-clip">
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/Aventador.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA4SYAMXVDVOSAWL32%2F20250227%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250227T115517Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCmV1LW5vcnRoLTEiRjBEAiADD4bcmeEaqjO29nT1blAkvyZhSHjoTihDvFVamPYkMAIgLvgKTopwZzgDMrn8%2F2xB%2BlSh1dqVaLXuTIMxLP6O5mEq7QIIdRAAGgw4NjQ4OTk4NzQxMTkiDKnjlDQrXE9Lhep3YyrKAq05gzB%2BbU7E1iuyDYCpTYReM%2FXZ3qrl0nNEkc%2BbJYZ3750VbfpLVDra%2FuRIY9N6vORInk8%2BcCIIP7GZPW7cagh43wwsaNeNxO97MA6zZgN%2F8gpa4JGTfq%2FPhKqgMzb%2BDa6kdhxrJ4%2FnGuPnKUviGIUTL4q5OB5pRfsW0VzImylQSEDlxElel0pxq3pIsU7IVXKZQ4mNIid0Ix5E%2Bhk0GAHa0IZyP44lXXd6PhNJ5sQWT%2FdLPKg%2B5cuzbKj2enBnsme6ucB3CIkcRS%2B2PVVlJ9UE0S%2FdcgMkvs4dDwzCRkiVrggmnxzZN353iZAn49ho1BphJUyvt4DjZp74TlZrNynXzutgx3O2iyyPgHzo2EZquqgCbmC8o3AxvShRlrVJ8OCyoNTkQ%2BFHk0qyb5YfPKnazh4B74cMwoLWUjaf4s4VrkDWiktxqjssOTCM8P69Bjq0AuReP%2F%2BfhQYUSkDSei1UShdtJM6hQIKlpbmgOJsA5UJZ4pi5r8BNlpSC%2F0TzV4kePYFERO2ZMHIAIKwj%2Bp8f2Dte3yclz%2FuIZJMapFH69zyXweN5JTolNoLqXVePrTFtHqMkytrwJ0NBozn4hJ4%2BS2p1y4FrW9vxLJP4UyuqwlviDqbsuFIak7wkXVoWJi%2BHmPQ6irUPmZzxroOhsXVAYhmo4dMkHjGCA96baWPnz441M4YqFvyFB9pdSdVNk%2BIUiYOxsYIPb0mpeqgahqhDt1QrC%2Bd8UVr06in0kV8waliUXE3FVEtgOy93qVqR3SdOA2R%2FYagvYDTEaIwkYmCS5Rtces7r4cvBwpuD%2F5DMM38i4uOw0wkNYBPYOL1YIoOZJvd2qfHl0P8Vadn7h%2FVm4HSCMmVt&X-Amz-Signature=af055419dc327057901ea83d902b6ab7bc9ac144f8e26a645aa238170c241089&X-Amz-SignedHeaders=host&response-content-disposition=inline"
            type="video/mp4"
          />
        </video>
        <div className="content"></div>
      </div>

      <div className="containervideo">
        <video autoPlay loop muted playsInline className="background-clip">
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/Redlamborgini.Mp4.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA4SYAMXVDSEEOJPS7%2F20250227%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250227T115650Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCmV1LW5vcnRoLTEiRzBFAiBeeuj7Z5ybxCzfCyhrj1kcwmV3W1ueCEnxepSRQqlyZgIhAMpqiuCgLHaRPbybCXqLarEi519XddVGCiIf77RH15aHKu0CCHUQABoMODY0ODk5ODc0MTE5IgztHff%2FuwvOZ4XxyjoqygJWVmAgW%2BJQ25blKXlcsIA7PXzaFRzLfR3Yyd8Y3zEpZoAr9aT7pRnCSzzcCpNly6HapbhyIXe0%2B2bqvgwWuKOGuM6WadGKosyycyX05n5O7W6mkn7QWGQ7j0GQUSR1pSpt%2Fq2AYbRG3vdHIBH6CPiHACD0UibWwFWNtLgXCfnMheyznPDqKlqNu5vic4IkFD86T1vjkL07rBka7Y096GPXXMsbGeqLabLscrx8VPmTsjcL9jFR52uFzVxIsE1%2FZDKKWYfoGKrOMIHUxmbYprCFrbJm1qZzyihc8JYu3OKplNJozeso3627RrnalrVBCStJgGlJ54rlwI1wAL%2Fc1w57MoT%2FGh%2B072%2FONXLv4SQVQUcDKwkQcIHDAdc1YrJoIB8Orp%2FnUdbGqOl7oS51or0C46y5bA0%2Bmpuwo8OT5GnV1e7DUR2e4dxttb8wjPD%2BvQY6swLytBFyotWr5Yohl3jqWRMHt9MdoSB1rr%2BNJjzGh%2Bwoui3h8U%2B6TuhuRRWoWUPpIAssgBxgiVExvbh%2F5lk9mF8wK3%2B2%2Bl3a7WtEhyknCqoLhFiffUu3BFCWDx%2Br0B1qb3J5NFI2CTs4dWgHwmR8z6QpzOpoN7cDueVtyTw7kS1J1mbNeOJmxjXBB%2BdC8EqYVLzR2Y7HOTF9iB8U77EMD1GVkx8XQYrWTtR6T%2FgkzPk9YpP9vsuHSE5Murz%2Bvq72umZYWBy6E44%2BFc4PK%2BQl2ky00GHylRDZfrrq2pSyo5M0x57n7zY4lfY%2BF7o2eO%2BF3JFb4rP8gvsM3b8hTistBdAnXLAx62uUL4vM1ci%2FBxluB6UuDMvjv5Wk7mIxRYOmqoIXcjkLFxnFHHrP%2BsfaomUyvFVg&X-Amz-Signature=de88a77e106c214bef1d12f657422cf6076431faa289d4b85ff110b80a492c68&X-Amz-SignedHeaders=host&response-content-disposition=inline"
            type="video/mp4"
          />
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
