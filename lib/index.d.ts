import { SxProps, Theme } from "@mui/system";
interface ICombineMuiSx<T extends Theme> {
    condition: boolean;
    sx: SxProps<T>;
}
declare const sxCompose: (...sx: Array<ICombineMuiSx | SxProps<T>>) => SxProps<T>;
export default sxCompose;
