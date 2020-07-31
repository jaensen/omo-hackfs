import {ProcessBuilder} from "../../../core/Flows/ProcessBuilder";
import {IProcessContext} from "../../../core/Flows/IProcessContext";

export function giveTrustFlow() {
  return new ProcessBuilder<IProcessContext>("omo.safe.giveTrustFlow")
    .category("Trust someone", (build) =>
      build

        .step("omo.safe.giveTrust:trustReceivingSafe")
        .withSideEffect("omo.shell.collectUserValue")
        .withQuant("OmoInput")
        .withTitle("Choose Safe Address")

        .step("omo.safe.giveTrust:trustPercentage")
        .withSideEffect("omo.shell.collectUserValue")
        .withQuant("OmoInput")
        .withTitle("Choose Trust Percentage")

        .step("omo.safe.giveTrust:giveTrust")
        .withSideEffect("omo.safe.giveTrust")
        .withQuant("OmoStatusResponse")
        .withTitle("Created new trust connection")
    )
    .end()
    .category("Other topic", (build) => {
      build
        .step("omo.safe.giveTrust:other")
        .withQuant("OmoInput")
        .withTitle("Enter safe address to giveTrust");
    })
    .end()
    .build();
}

export function removeTrustFlow() {
  return new ProcessBuilder<IProcessContext>("omo.safe.removeTrustFlow")
    .category("Revoke Trust", (build) =>
      build

        .step("omo.safe.removeTrust:trustReceivingSafe")
        .withSideEffect("omo.shell.collectUserValue")
        .withQuant("OmoInput")
        .withTitle("Choose Safe Address")

        .step("omo.safe.removeTrust:removeTrust")
        .withSideEffect("omo.safe.removeTrust")
        .withQuant("OmoStatusResponse")
        .withTitle("Revoke trust connection")
    )
    .end()
    .build();
}
