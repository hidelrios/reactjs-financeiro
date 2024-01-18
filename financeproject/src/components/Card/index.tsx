import {
  CardContainer,
  CardContent,
  CardHeader,
  CardPrice,
  CardTitle,
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
        <span>PREÇO DO ATIVO</span>
        <CardPrice>{close}<ArrowUp size={25} /></CardPrice>
    
      </CardContent>
    </CardContainer>
  );
}
