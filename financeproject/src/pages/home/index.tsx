import { useContext } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import {
  FilterTagContainer,
  FilterTagContent,
  HomeContainer,
  HomeTitle,
  MainContainer,
  TagSpan,
} from "./styles";
import { StocksContext } from "../../contexts/StocksContext";

export function Home() {
  const { stocks } = useContext(StocksContext);
  return (
    <div>
      <Header />
      <HomeContainer>
        <HomeTitle>Explore o mercado</HomeTitle>
        
        <FilterTagContainer>
          <TagSpan>Ordenar:</TagSpan>
          <FilterTagContent>
            <Tag title="Em alta" color="blue" />
            <Tag title="Em baixa" />
          </FilterTagContent>
        </FilterTagContainer>

        <MainContainer>
          {stocks.map((stock) => {
            return (
              <Card
                key={stock.stock}
                stock={stock.stock}
                name={stock.name}
                close={stock.close}
                logo={stock.logo}
              />
            );
          })}
        </MainContainer>
      </HomeContainer>
    </div>
  );
}
