import { SxProps, Theme } from "@mui/system";

interface ICombineMuiSx<T extends Theme> {
  condition: boolean
  sx: SxProps<T>
}


const sxCompose = <T extends Theme>(...sx: Array<ICombineMuiSx<T> | SxProps<T>>): SxProps<T> => {
  return sx.reduce((acc: SxProps<T>, curr: ICombineMuiSx<T> | SxProps<T>) => {
    if ((curr as ICombineMuiSx<T>).condition) {
      return { ...acc, ...(curr as ICombineMuiSx<T>).sx } as SxProps
    }
    return { ...acc, ...(curr as SxProps<T>) } as SxProps
  }, {} as SxProps)
}

export default sxCompose