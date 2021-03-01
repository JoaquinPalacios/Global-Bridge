import { OverlayTrigger, Popover } from "react-bootstrap";
import CartComponent from "../Cart/Cart";
import CartWidgetComponet from "../CartWidget/CartWidget";

const CartHover = () => {
    const popOver = (
        <Popover>
          <Popover.Content>
            <CartComponent />
          </Popover.Content>
        </Popover>
      );
    return(
        <>
        <OverlayTrigger
        trigger={["click", "hover"]}
        rootClose={true}
        placement={"bottom"}
        overlay={popOver}>
          <div className={"d-inline-block"}>
              <CartWidgetComponet />
          </div>
        </OverlayTrigger>
        </>
    );
};

export default CartHover;