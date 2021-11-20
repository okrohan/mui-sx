import { SxProps, Theme } from "@mui/system";

type ISxPropsType = SxProps<Theme>;

interface ICombineMuiSx {
  condition: boolean;
  sx: ISxPropsType;
}

const sxCompose = (
    ...sx: Array<ICombineMuiSx | ISxPropsType>
  ): ISxPropsType => {
    return sx.reduce((acc: ISxPropsType, curr: ICombineMuiSx | ISxPropsType) => {
      if ((curr as ICombineMuiSx).condition) {
        return { ...acc, ...(curr as ICombineMuiSx).sx } as ISxPropsType;
      }
      return { ...acc, ...(curr as ISxPropsType) } as ISxPropsType;
    }, {} as ISxPropsType);
  };

export default sxCompose