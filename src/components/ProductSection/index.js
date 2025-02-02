import React from 'react';
import CategorySection from '../CategorySection';

import ProductShowcase from '../ProductList';
import styles from './index.module.scss';

const ProductSection = () => {
    return(
        <div className={styles._}>
            <div className={styles.category_section}>
                <CategorySection />
            </div>
            <div className={styles.product_showcase}>
                <ProductShowcase />
            </div>
        </div>
    )
}

export default ProductSection;