import { MoveRight } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

function SelectorSize() {
    return (
        <div className="my-2 sm:my-0">
            <Select>
                <SelectTrigger className="w-[270px]">
                    <SelectValue placeholder="Tamaño"/>
                    <SelectContent>
                         <SelectGroup>
                            <SelectItem value="m">M <MoveRight /> €30</SelectItem>
                            <SelectItem value="l">L<MoveRight /> €40</SelectItem>
                            <SelectItem value="xl">XL<MoveRight /> €50</SelectItem>
                         </SelectGroup>
                    </SelectContent>
                </SelectTrigger>
            </Select>
        </div>
    )
}

export default SelectorSize;