import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    return <h1>ProductDetail router {params.productId}</h1>;
}

export default ProductDetail;