import { hash, compare } from "bcryptjs";

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const p2e = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const sp = (number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

export const qountityCount = (card, id) => {
  if (card.selectedItems?.length >= 1) {
    const index = card.selectedItems.findIndex((item) => item._id === id);
    if (index === -1) {
      return false;
    } else {
      return card.selectedItems[index].qty;
    }
  } else {
    return false;
  }
};

export const isDataInArray = (card, id) => {
  return card.selectedItems?.find((item) => item._id === id);
};

export { hashPassword, verifyPassword, e2p, p2e, sp };
