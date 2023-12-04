import React, { useState, useEffect } from 'react';

import ProductsLogo from '../../assets/products-Logo.svg';
import { CardProducts } from '../../components';
import api from '../../services/api';
import formatCurrency from '../../Utils/formatCurrency';
import {
    Container,
    ProductsImg,
    CategoryButton,
    CategoriesMenu,
    ProductsContainer
} from './styles';

function Products({ location: { state } }) {
    let categoryId = 0;
    if (state?.categoryId) {
        categoryId = state.categoryId;
    }

    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(categoryId);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories');

            const newCategories = [{ id: 0, name: 'Todos' }, ...data];
            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products');

            const newProducts = allProducts.map(product => {
                return {
                    ...product,
                    formatedPrice: formatCurrency(product.price)
                };
            });

            setProducts(newProducts);
        }
        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory
            );

            setFilteredProducts(newFilteredProducts);
        }
    }, [activeCategory, products]);

    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="logo da home" />
            <CategoriesMenu>
                {categories &&
                    categories.map(category => (
                        <CategoryButton
                            type="button"
                            key={category.id}
                            isActiveCategory={activeCategory === category.id}
                            onClick={() => {
                                setActiveCategory(category.id);
                            }}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
            </CategoriesMenu>
            <ProductsContainer>
                {filteredProducts &&
                    filteredProducts.map(product => (
                        <CardProducts key={product.id} product={product} />
                    ))}
            </ProductsContainer>
        </Container>
    );
}
export default Products;
