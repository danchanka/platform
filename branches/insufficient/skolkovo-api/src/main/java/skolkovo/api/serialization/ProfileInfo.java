package skolkovo.api.serialization;

import java.io.Serializable;

public class ProfileInfo implements Serializable {
    public String expertEmail;
    public String expertName;

    public VoteInfo voteInfos[];
}
