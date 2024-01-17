import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { FilterTag, HomeContainer, TagSpan, TransactionsContainer } from "./styles";

export function Home() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <h1>Explore o mercado</h1>
        <FilterTag>
            <TagSpan>Ordenar:</TagSpan>
          <Tag title="Em alta" color="blue" />
          <Tag title="Em baixa" />
        </FilterTag>
        <TransactionsContainer>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </TransactionsContainer>
        
      </HomeContainer>
    </div>
  );
}
