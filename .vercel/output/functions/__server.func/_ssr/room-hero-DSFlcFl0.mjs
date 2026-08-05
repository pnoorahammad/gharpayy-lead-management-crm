const PALETTE = [
  "bg-gradient-to-br from-rose-400 to-rose-600",
  "bg-gradient-to-br from-amber-400 to-orange-500",
  "bg-gradient-to-br from-sky-400 to-indigo-500",
  "bg-gradient-to-br from-emerald-400 to-teal-500",
  "bg-gradient-to-br from-fuchsia-400 to-pink-500",
  "bg-gradient-to-br from-violet-400 to-purple-600"
];
function roomHeroClass(roomId) {
  let h = 0;
  for (let i = 0; i < roomId.length; i++) h = h * 31 + roomId.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}
export {
  roomHeroClass as r
};
