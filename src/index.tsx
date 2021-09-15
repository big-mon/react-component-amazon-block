type Props = {
  id: string;
  asin: string;
  children: React.ReactNode;
};

/** Amazon商品ブロック
 * @param id Your Amazon Affiliate ID
 * @param asin Amazon Item ASIN code
 * @param children alt text
 */
export const AmazonBlock = ({ id = "", asin, children }: Props) => {
  const amazonUrl = `https://www.amazon.co.jp/gp/product/`;
  const itemUrl = amazonUrl + asin + (id == "" ? "" : "/?tag=" + id);
  const imageUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ`;

  return (
    <div className="amazon">
      <div className="itemImage">
        <a
          href={itemUrl}
          rel="noreferrer noopener external nofollow"
          target="_blank"
        >
          <img src={imageUrl} alt={children?.toString()} />
        </a>
      </div>
      <div className="itemName">
        <a
          href={itemUrl}
          rel="noreferrer noopener external nofollow"
          target="_blank"
        >
          {children}
        </a>
      </div>
      <div className="shopBrand">
        <a
          href={itemUrl}
          rel="noreferrer noopener external nofollow"
          target="_blank"
        >
          Amazon
        </a>
      </div>
    </div>
  );
};
