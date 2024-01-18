import {
  CardContainer,
  CardContent,
  CardHeader,
  CardPrice,
  CardTitle,
  TitleSpan,
} from "./styles";
import { ArrowUp } from "@phosphor-icons/react";

type StockProps = {
  stock: string;
  name : string;
  close: number;
  logo : string
}

export function Card({stock, name, close,logo}:StockProps ) {
  return (
    <CardContainer>
        <img src={logo} alt="" style={{ width: '20%' }} />

      <CardContent>
        <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardTitle>{stock}</CardTitle>
        </CardHeader>
        <TitleSpan>PREÇO DO ATIVO</TitleSpan>
        <CardPrice> R$ {close}<ArrowUp size={18} /></CardPrice>
    
      </CardContent>
    </CardContainer>
  );
}
