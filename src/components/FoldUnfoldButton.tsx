import { cn } from "@/lib/utils";
import { ChevronsDown } from "lucide-react";

type propsType = {
  className: string;
  fold_unfold: "fold" | "unfold";
};

const unfoldSpoilers = () => {
  const triggers = document.getElementsByName("trigger");

  triggers.forEach(function (currValue, currIndex, listObj) {
    if (currValue.dataset.state === "closed") {
      currValue.click();
    }
  });
};
const foldSpoilers = () => {
  const triggers = document.getElementsByName("trigger");

  triggers.forEach(function (currValue, currIndex, listObj) {
    if (currValue.dataset.state === "open") {
      currValue.click();
    }
  });
};

const FoldUnfoldButton = (props: propsType) => {
  return (
    <>
      <button
        className={cn(props.className, "rounded-full p-2")}
        onClick={props.fold_unfold === "unfold" ? unfoldSpoilers : foldSpoilers}
      >
        <ChevronsDown
          className={cn(
            "size-[20px] shrink-0",
            props.fold_unfold === "fold" ? "rotate-180" : "",
          )}
        />
      </button>
    </>
  );
};

export { FoldUnfoldButton };
