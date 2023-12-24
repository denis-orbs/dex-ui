export interface SubmitButtonProps {
    disabled?: boolean;
    text: string;
    onClick?: () => void;
    isLoading?: boolean;
}


export interface DexProps {
  srcToken?: { symbol: string; logoUrl: string };
  destToken?: { symbol: string; logoUrl: string };
  srcAmount?: number;
  onChangeSrcAmount?: (amount?: string) => void;
  dstAmount?: number;
  srcUsd?: string;
  srcBalance?: string;
    destUsd?: string;
    destBalance?: string;
onChangeTokens: () => void;
onSubmit: () => void;
submitLoading?: boolean;
submitDisabled?: boolean;
submitText?: string;
onPercentClick: (percent: number) => void;
srcLabel?: string;
destLabel?: string;
}