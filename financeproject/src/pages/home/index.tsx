import { useContext } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { FilterTag, HomeContainer, TagSpan, TransactionsContainer } from "./styles";
import { StocksContext } from "../../contexts/StocksContext";


export function Home() {
  const { stocks } = useContext(StocksContext);
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
          {stocks.map((stock)=>{
            return <Card 
            key={stock.stock}
            stock={stock.stock}
            name={stock.name}
            close={stock.close}
            logo={stock.logo} />;
          })}
        </TransactionsContainer>
        
      </HomeContainer>
    </div>
  );
}
