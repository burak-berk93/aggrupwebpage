import { useEffect, useState } from "react";
import { db } from "./firebase"; // Firebase bağlantını içe aktar
import { collection, getDocs } from "firebase/firestore";

const OfferList = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "offers"));
        const offerList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setOffers(offerList);
      } catch (error) {
        console.error("Teklifleri çekerken hata oluştu:", error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div>
      <h2>Teklif Listesi</h2>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>{offer.title} - {offer.price} TL</li>
        ))}
      </ul>
    </div>
  );
};

export default OfferList;
