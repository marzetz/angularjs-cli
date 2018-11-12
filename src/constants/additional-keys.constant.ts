import {ECommandAdditionalArguments} from "../enums/command-arguments.enum";
import {ECommandCores} from "../enums/command-cores.enum";

export const CAdditionalKeys = {
    [ECommandCores.NEW]: [
        ECommandAdditionalArguments.STYLE,
        ECommandAdditionalArguments.DEPENDENCIES,
    ],
    [ECommandCores.GENERATE]: [
        ECommandAdditionalArguments.SKIP_IMPORT,
    ]
};
