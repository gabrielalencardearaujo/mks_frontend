import styled from 'styled-components';

const CardProduct = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 217.56px;
  height: 285px;
  gap: 10px;
  opacity: 0px;
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 0.13);
  border-radius: 8px;
  padding: 14px;
  overflow: hidden;
  background-color: white;
`;

const PriceLabel = styled.p`
  background-color: #373737;
  min-width: 64px;
  height: 26px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 15px;
  color: white;
  padding: 4px 6px;
`;

const NameLabel = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  max-width: 120px;
`;

const DescriptionLabel = styled.p`
  font-size: 10px;
  font-weight: 300;
  line-height: 10px;
  text-align: left;
`;

const BuyButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  background-color: #0f52ba;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  border: none;
  height: 31.91px;
  color: white;
  border-radius: 0px 0px 8px 8px;
  opacity: 0px;
  cursor: pointer;
`;

export { CardProduct, PriceLabel, NameLabel, DescriptionLabel, BuyButton };
