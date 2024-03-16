import {CartForm, Image, Money} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {useVariantUrl} from '~/lib/variants';
import {useRootLoaderData} from '~/root';


/**
 * @param {CartMainProps}
 */
export function CartMain({layout, cart}) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;

  return (
    <div className={className}>
      <CartEmpty hidden={linesCount} layout={layout} />
      <CartDetails cart={cart} layout={layout} />
    </div>
  );
}

/**
 * @param {CartMainProps}
 */
function CartDetails({layout, cart}) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  return (
    <div className="cart-details flex flex-col justify-between">
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <div className="p-5 pb-3 bg-white">
          <div className="border-b-4 pb-[10px] border-black">
            <CartSummary cost={cart.cost} layout={layout}>
              {/* <CartDiscounts discountCodes={cart.discountCodes} /> */}
              <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
            </CartSummary>
          </div>
          <div className=" pt-4 flex gap-3 justify-end ">
        <div className="flex flex-col items-end gap-1 justify-end">
          <p className="text-[14px] font-semibold text-black">Free Bonus Meat (unlocked at $125)</p>
          <span className="text-[12px] font-semibold uppercase mb-1 py-2 w-fit bg-[#E4E4E4] px-5 border border-[#949494]  ">
            Locked
          </span>
        </div>
        <img
        className='w-[80px] h-[80px] object-contain '
          src="https://cdn.shopify.com/s/files/1/0672/4776/7778/files/free-meat-unlocked-at-125-536967_medium_d6071a01-575e-4b92-99c9-67caead4140f.png"
          alt=""
        />
      </div>
        </div>
      )}
    </div>
  );
}

/**
 * @param {{
 *   layout: CartMainProps['layout'];
 *   lines: CartApiQueryFragment['lines'] | undefined;
 * }}
 */
function CartLines({lines, layout}) {
  if (!lines) return null;

  return (
    <div aria-labelledby="cart-lines" className="h-[260px] overflow-auto">
      <ul>
        {lines.nodes.map((line) => (
          <CartLineItem key={line.id} line={line} layout={layout} />
        ))}
      </ul>
    </div>
  );
}

/**
 * @param {{
 *   layout: CartMainProps['layout'];
 *   line: CartLine;
 * }}
 */
function CartLineItem({layout, line}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);

  return (
    <li key={id} className="cart-line pl-[10px] mb-5 flex gap-4">
      {image && (
        <Image
          alt={title}
          // aspectRatio="1/1"
          data={image}
          height={100}
          loading="lazy"
          width={72}
        />
      )}

      <div className="flex  flex-1 pr-[10px] justify-between items-center ">
        <div className="h-fit flex-1">
          <Link
            prefetch="intent"
            to={lineItemUrl}
            className="font-semibold text-[14px]  text-center "
            onClick={() => {
              if (layout === 'aside') {
                // close the drawer
                window.location.href = lineItemUrl;
              }
            }}
          >
            <p>
              <strong className="pr-[10px] flex justify-center">{product.title}</strong>
            </p>
          </Link>
          <CartLinePrice line={line} as="span" />
        </div>
        {/* <ul>
          {selectedOptions.map((option) => (
            <li key={option.name}>
              <small>
                {option.name}: {option.value}
              </small>
            </li>
          ))}
        </ul> */}
        <CartLineQuantity line={line} />
      </div>
    </li>
  );
}

/**
 * @param {{checkoutUrl: string}}
 */
function CartCheckoutActions({checkoutUrl}) {
  if (!checkoutUrl) return null;

  return (
    <div className="flex justify-center items-center w-1/2 bg-[#425b34]">
      <a
        href={checkoutUrl}
        className="bg-[#425b34] text-[15px] py-[10px] font-semibold text-white"
        target="_self"
      >
        <p>Continue to Checkout </p>
      </a>
      <br />
    </div>
  );
}

/**
 * @param {{
 *   children?: React.ReactNode;
 *   cost: CartApiQueryFragment['cost'];
 *   layout: CartMainProps['layout'];
 * }}
 */
export function CartSummary({cost, layout, children = null}) {
  const className =
    layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside';

  return (
    <div
      aria-labelledby="cart-summary"
      className={`${className} flex justify-between items-end `}
    >
      {/* <h4>Totals</h4> */}
      <dl className="cart-subtotal flex font-semibold text-base">
        <dt className="pr-1">Total: </dt>
        <dd>
          {cost?.subtotalAmount?.amount ? (
            <Money data={cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </dd>
      </dl>
      {children}
    </div>
  );
}

/**
 * @param {{lineIds: string[]}}
 */
function CartLineRemoveButton({lineIds}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
    >
      <button
        className="text-[14px] text-center text-[#862e1b] font-bold w-[100%]"
        type="submit"
      >
        Remove
      </button>
    </CartForm>
  );
}

/**
 * @param {{line: CartLine}}
 */
function CartLineQuantity({line}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));
   console.log(nextQuantity);
  return (
    <div className="cart-line-quantity">
      <div className="flex gap-[5px] items-center bg-[#862e1b] justify-between p-[5px]">
        <CartLineUpdateButton lines={[{id: lineId, quantity: prevQuantity}]}>
          <button
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
            name="decrease-quantity"
            value={prevQuantity}
            className="text-[#862e1b] w-[25px] flex justify-center items-center h-[25px] bg-white rounded-[5px] p-[3px] "
          >
            <span>&#8722; </span>
          </button>
        </CartLineUpdateButton>
        <small className="text-[#000] font-bold text-[14px] text-center bg-white flex justify-center items-center w-[32px] h-[25px] p-[3px] ">
          {quantity}
        </small>
        <CartLineUpdateButton lines={[{id: lineId, quantity: nextQuantity}]}>
          <button
            className="text-[#862e1b] bg-white flex justify-center items-center rounded-[5px] p-[3px] w-[25px] h-[25px]"
            aria-label="Increase quantity"
            name="increase-quantity"
            value={nextQuantity}
          >
            <span>&#43;</span>
          </button>
        </CartLineUpdateButton>
      </div>
      <CartLineRemoveButton lineIds={[lineId]} />
    </div>
  );
}

/**
 * @param {{
 *   line: CartLine;
 *   priceType?: 'regular' | 'compareAt';
 *   [key: string]: any;
 * }}
 */
function CartLinePrice({line, priceType = 'regular', ...passthroughProps}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return (
    <div className="font-bold text-center text-[25px] ">
      <Money withoutTrailingZeros {...passthroughProps} data={moneyV2} />
    </div>
  );
}

/**
 * @param {{
 *   hidden: boolean;
 *   layout?: CartMainProps['layout'];
 * }}
 */
export function CartEmpty({hidden = false, layout = 'aside'}) {
  return (
    <div hidden={hidden}>
      <br />
      <div className=" p-5 pb-3 absolute bottom-0 w-full ">
        <div className="border-b-4 flex justify-between items-end pb-[10px] border-black w-full ">
          <div className="w-1/2 flex">
            <p className="pr-1 text-base font-semibold">Total:</p>
            <p className="text-base font-semibold">$0.00</p>
          </div>
          <div className="flex justify-center items-center w-1/2  bg-[#6e6e6e]">
            <a
              // href={checkoutUrl}
              className=" text-[15px] py-[10px] font-semibold text-white"
              target="_self"
            >
              <p>Spend $750 to Continue </p>
            </a>
            <br />
          </div>
        </div>
        <div className=" pt-6 flex gap-3 justify-end ">
        <div className="flex flex-col items-end gap-1 justify-end">
          <p className="text-[14px] font-semibold text-black">Free Bonus Meat (unlocked at $125)</p>
          <span className="text-[12px] font-semibold uppercase mb-1 py-2 w-fit bg-[#E4E4E4] px-5 border border-[#949494]  ">
            Locked
          </span>
        </div>
        <img
        className='w-[80px] h-[80px] object-contain '
          src="https://cdn.shopify.com/s/files/1/0672/4776/7778/files/free-meat-unlocked-at-125-536967_medium_d6071a01-575e-4b92-99c9-67caead4140f.png"
          alt=""
        />
      </div>
      </div>
      
    </div>
  );
}

/**
 * @param {{
 *   discountCodes: CartApiQueryFragment['discountCodes'];
 * }}
 */
function CartDiscounts({discountCodes}) {
  const codes =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({code}) => code) || [];

  return (
    <div>
      {/* Have existing discount, display it with a remove option */}
      <dl hidden={!codes.length}>
        <div>
          <dt>Discount(s)</dt>
          <UpdateDiscountForm>
            <div className="cart-discount">
              <code>{codes?.join(', ')}</code>
              &nbsp;
              <button>Remove</button>
            </div>
          </UpdateDiscountForm>
        </div>
      </dl>

      {/* Show an input to apply a discount */}
      <UpdateDiscountForm discountCodes={codes}>
        <div>
          <input type="text" name="discountCode" placeholder="Discount code" />
          &nbsp;
          <button type="submit">Apply</button>
        </div>
      </UpdateDiscountForm>
    </div>
  );
}

/**
 * @param {{
 *   discountCodes?: string[];
 *   children: React.ReactNode;
 * }}
 */
function UpdateDiscountForm({discountCodes, children}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.DiscountCodesUpdate}
      inputs={{
        discountCodes: discountCodes || [],
      }}
    >
      {children}
    </CartForm>
  );
}

/**
 * @param {{
 *   children: React.ReactNode;
 *   lines: CartLineUpdateInput[];
 * }}
 */
function CartLineUpdateButton({children, lines}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{lines}}
    >
      {children}
    </CartForm>
  );
}

/** @typedef {CartApiQueryFragment['lines']['nodes'][0]} CartLine */
/**
 * @typedef {{
 *   cart: CartApiQueryFragment | null;
 *   layout: 'page' | 'aside';
 * }} CartMainProps
 */

/** @typedef {import('@shopify/hydrogen/storefront-api-types').CartLineUpdateInput} CartLineUpdateInput */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
