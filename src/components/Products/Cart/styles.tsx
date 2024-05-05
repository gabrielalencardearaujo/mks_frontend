import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  max-height: 100vh;
  right: 0px;
  display: flex;
  flex-direction: column;
  width: 486px;
  background-color: #0f52ba;
  z-index: 10;
  box-shadow: -5px 0 6px 0 rgb(0 0 0 / 0.13);
`;

export const FormCart = styled.form`
  position: relative;
  padding: 47px;
  height: 100%;
  overflow: hidden;
  color: whtie;
  display: grid;
`;

export const ContentProd = styled.div`
  display: flex;
  align-items: start;
  max-height: 100%;
  overflow: auto;
  overflow-x: hidden;
  flex-direction: column;
  gap: 22px;
  padding: 20px 0px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #e4e4e4;
    border-radius: 10px;
  }
`;

export const HeadeCartModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: white;
  padding: 36px 48px;
`;

export const BtnCloseCartModal = styled.div`
  background-color: black;
  width: 38px;
  height: 38px;
  color: currentColor;
  border-radius: 100%;
  display: grid;
  place-items: center;
  font-weight: 700;
  cursor: pointer;
`;

export const TotalPriceCart = styled.div`
  font-size: 28px;
  font-weight: 700;
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;
  margin-top: auto;
  margin-bottom: 80px;
`;

export const BtnPurchase = styled.button`
  position: absolute;
  background-color: black;
  width: 100%;
  height: 97px;
  bottom: 0px;
  left: 0px;
  border: none;
  color: white;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  text-align: center;
  cursor: pointer;
`;

export const TitleCartContainer = styled.h2`
  max-width: 180px;
  font-size: 27px;
`;
