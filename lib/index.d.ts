import { SxProps, Theme } from "@mui/system";
declare type ISxPropsType = SxProps<Theme>;
interface ICombineMuiSx {
    condition: boolean;
    sx: ISxPropsType;
}
declare const sxCompose: (...sx: Array<ICombineMuiSx | ISxPropsType>) => ISxPropsType;
export default sxCompose;
