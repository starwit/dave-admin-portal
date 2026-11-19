import type BaseEntity from "@/types/common/BaseEntity";
import type ZaehlungDTO from "@/types/zaehlung/ZaehlungDTO";

export default interface ZaehlstelleDTO extends BaseEntity {
  nummer: string;
  name: string;
  stadtbezirk: string;
  stadtbezirkNummer: number;
  lat: number;
  lng: number;
  customSuchwoerter: string[];
  zaehlungen: ZaehlungDTO[];
  kommentar: string;
  sichtbarDatenportal: boolean;
}
