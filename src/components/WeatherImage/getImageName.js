export function getImageName({ name }) {
  let icon;

  switch (name) {
    case 'sn':
      icon = `sn.svg`;
      break;
    case 'sl':
      icon = `sl.svg`;
      break;
    case 'h':
      icon = `h.svg`;
      break;
    case 't':
      icon = `t.svg`;
      break;
    case 'hr':
      icon = `hr.svg`;
      break;
    case 'lr':
      icon = `lr.svg`;
      break;
    case 's':
      icon = `s.svg`;
      break;
    case 'hc':
      icon = `hc.svg`;
      break;
    case 'lc':
      icon = `lc.svg`;
      break;
    case 'c':
      icon = `c.svg`;
      break;
    default:
      icon = 'close.svg';
      break;
  }

  return icon;
}
