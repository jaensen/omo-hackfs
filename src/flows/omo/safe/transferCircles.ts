import {ProcessBuilder} from "../../../core/Flows/ProcessBuilder";
import {IProcessContext} from "../../../core/Flows/IProcessContext";

export function transferCircles()
{
    return new ProcessBuilder<IProcessContext>("flows:omo.safe.transferCircles")
        .category("Trust someone", build =>
            build

            .step("flows:omo.safe.transferCircles:receivingSafe")
                .withSideEffect("sideEffects:omo.shell.collectStepResult")
                .withQuant("OmoInput")
                .withTitle("Enter the address of the safe you want to send Circles to.")

            .step("flows:omo.safe.transferCircles:amount")
                .withSideEffect("sideEffects:omo.shell.collectStepResult")
                .withQuant("OmoInput")
                .withTitle("How much?")

            .step("flows:omo.safe.transferCircles:transferCircles")
                .withSideEffect("sideEffects:omo.safe.transferCircles")
                .withQuant("OmoStatusResponse")
                .withTitle("Review & confirm")
        )
        .end()
        .build();
}
