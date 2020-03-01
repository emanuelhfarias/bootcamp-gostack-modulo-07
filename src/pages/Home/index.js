import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapato-social-gofer-verniz-masculino/16/J43-0176-016/J43-0176-016_zoom1.jpg?ims=326x"
          alt="Sapato"
        />
        <strong>Sapato cawboi: calçado com um texto muito muito longo</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapato-social-gofer-verniz-masculino/16/J43-0176-016/J43-0176-016_zoom1.jpg?ims=326x"
          alt="Sapato"
        />
        <strong>Sapato cawboi</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapato-social-gofer-verniz-masculino/16/J43-0176-016/J43-0176-016_zoom1.jpg?ims=326x"
          alt="Sapato"
        />
        <strong>Sapato cawboi</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapato-social-gofer-verniz-masculino/16/J43-0176-016/J43-0176-016_zoom1.jpg?ims=326x"
          alt="Sapato"
        />
        <strong>Sapato cawboi</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapato-social-gofer-verniz-masculino/16/J43-0176-016/J43-0176-016_zoom1.jpg?ims=326x"
          alt="Sapato"
        />
        <strong>Sapato cawboi</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapato-social-gofer-verniz-masculino/16/J43-0176-016/J43-0176-016_zoom1.jpg?ims=326x"
          alt="Sapato"
        />
        <strong>Sapato cawboi</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
