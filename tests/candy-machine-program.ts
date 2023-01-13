import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { CandyMachineProgram } from "../target/types/candy_machine_program";

describe("candy-machine-program", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.CandyMachineProgram as Program<CandyMachineProgram>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
