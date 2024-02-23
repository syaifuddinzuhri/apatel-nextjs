import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  addon: {
    mx: 3,
    top: "unset",
  },
  field: {
    paddingX: 4,
    paddingY: 3,
    height: "auto",
    fontSize: { base: "12px", md: "14px" },
    lineHeight: { base: "20px", md: "24px" },
    fontWeight: 500,
    borderRadius: 12,
  },
  element: {
    mx: 3,
    bottom: 0,
    width: 6,
  },
  group: {
    ":has(.chakra-input__left-element) > input": {
      paddingLeft: 12,
    },
    ":has(.chakra-input__right-element) > input": {
      paddingRight: 12,
    },
  },
});

const InputConfig = defineMultiStyleConfig({
  baseStyle,
  sizes: {
    // Define size variations here
    sm: {
      field: {
        paddingX: 2,
        paddingY: 1,
        height: "32px",
        fontSize: "12px",
      },
    },
    md: {
      // Default baseStyle already defined
    },
    lg: {
      field: {
        paddingX: 6,
        paddingY: 4,
        height: "48px",
        fontSize: "18px",
        borderRadius: 8,
      },
    },
  },
  variants: {
    default: {
      field: {
        border: "1px solid #EDEFF2",
        background: "#FAFBFC",
      },
    },
  },
  defaultProps: {
    size: "md", // Set default size
    variant: "default",
  },
});

export default InputConfig;
