import {
  CardContainer,
  CardContent,
  CardHeader,
  CardPrice,
  CardTitle,
} from "./styles";
import logoImg from "../../assets/logoeletro.png";
import { ArrowUp } from "@phosphor-icons/react";
export function Card() {
  return (
    <CardContainer>
      <img src={logoImg} alt="" />
      <CardContent>
        <CardHeader>
            <CardTitle>AES Eletropaulo</CardTitle>
            <CardTitle>ELPL4</CardTitle>
        </CardHeader>
        <span>PREÇO DO ATIVO</span>
        <CardPrice>R$ 36,32 <ArrowUp size={25} /></CardPrice>
        
      </CardContent>
    </CardContainer>
  );
}
