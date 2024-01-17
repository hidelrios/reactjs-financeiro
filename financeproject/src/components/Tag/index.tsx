import { TagContainer, TagContent } from "./styles";

type Props = {
    title: string
    color?: string
}
export function Tag({title, color}: Props){
    return(
        <TagContainer variant={color}>
            <TagContent variant={color}>
                {title}
            </TagContent>
        </TagContainer>
    )
}