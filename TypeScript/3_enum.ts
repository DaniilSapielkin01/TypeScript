enum Membership {
  Simple,
  Standart,
  Premium,
}
const membership = Membership.Standart; // 1
//интерисует  enum по индексу [2]
const memberShipReverse = Membership[2]; // Premium

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const socialmedia = SocialMedia.INSTAGRAM; //INSTAGRAM

