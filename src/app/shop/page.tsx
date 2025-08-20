'use client';
import { useEffect } from 'react';

export default function Shop() {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    // Defer Shopify SDK initialization until DOM is fully loaded
    const onDomReady = () => {
      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      const loadScript = () => {
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        document.head.appendChild(script);
        script.onload = ShopifyBuyInit;
        script.onerror = () => {
          console.error('Failed to load Shopify Buy Button SDK');
        };
      };
      const ShopifyBuyInit = () => {
        if (!window.ShopifyBuy) {
          console.error('ShopifyBuy is not available on window');
          return;
        }
        const client = window.ShopifyBuy.buildClient({
          domain: 'stteu4-3n.myshopify.com',
          storefrontAccessToken: '2531adf265f4abd1717b02a1f42f9b07',
        });
        window.ShopifyBuy.UI.onReady(client).then((ui) => {
          const node = document.getElementById('product-component-1755666147073');
          if (!node) {
            console.error('Product component node not found');
            return;
          }
          node.innerHTML = '';
          ui.createComponent('product', {
            id: '7782650904599',
            node: node,
            moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
            options: {
              product: {
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': 'calc(25% - 20px)',
                      'margin-left': '20px',
                      'margin-bottom': '50px',
                    },
                  },
                },
                buttonDestination: 'checkout',
                text: {
                  button: 'Buy now',
                },
              },
              productSet: {
                styles: {
                  products: {
                    '@media (min-width: 601px)': {
                      'margin-left': '-20px',
                    },
                  },
                },
              },
              modalProduct: {
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  button: false,
                  buttonWithQuantity: true,
                },
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': '100%',
                      'margin-left': '0px',
                      'margin-bottom': '0px',
                    },
                  },
                },
                text: {
                  button: 'Add to cart',
                },
              },
              option: {},
              cart: {
                text: {
                  total: 'Subtotal',
                  button: 'Checkout',
                },
              },
              toggle: {},
            },
          });
        }).catch((err) => {
          console.error('ShopifyBuy.UI.onReady error:', err);
        });
      };
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
    };
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      onDomReady();
    } else {
      window.addEventListener('DOMContentLoaded', onDomReady);
    }
    return () => {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        const node = document.getElementById('product-component-1755666147073');
        if (node) {
          node.innerHTML = '';
        }
      }
      window.removeEventListener('DOMContentLoaded', onDomReady);
    };
  }, []);
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div id="product-component-1755666147073"></div>
    </div>
  );
}