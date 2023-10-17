import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
    return (
        <Card className="flex justify-between p-[1.875rem]">
            <Button size="icon" variant="outline">
                <MenuIcon />
            </Button>
        </Card>
    );
}
 
export default Header;