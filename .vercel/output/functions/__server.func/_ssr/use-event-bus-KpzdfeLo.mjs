import { r as reactExports } from "../_libs/react.mjs";
import { a3 as glueBus } from "./router-Brs45mHz.mjs";
function useGlueEvents(filter, limit = 50) {
  const [events, setEvents] = reactExports.useState([]);
  reactExports.useEffect(() => {
    setEvents(glueBus.recent(filter, limit));
    const off = glueBus.subscribe(() => {
      setEvents(glueBus.recent(filter, limit));
    });
    return off;
  }, [filter, limit]);
  return events;
}
export {
  useGlueEvents as u
};
